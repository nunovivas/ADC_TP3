import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'A melhor Manutenção para seu veiculo',
    Svg: require('@site/static/img/repair.svg').default,
    description: (
      <>
      Temos profissionais muito qualificados para dar manutençao em seu automovel.
      </>
    ),
  },
  {
    title: 'Foco no que é importante - o dinheiro',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        Na nossa empresa, focamo-nos no que é importante, vender os nossos carros que não prestam para nada, pelo preço mais caro possivel.
      </>
    ),
  },
  {
    title: '100% Seguro',
    Svg: require('@site/static/img/travel.svg').default,
    description: (
      <>
        Viaje sempre com seu veiculo revisado e seguro.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
