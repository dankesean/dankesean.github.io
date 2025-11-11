---
title: "Model-free data assimilation in the embedded space"
collection: publications
category: manuscripts
permalink: /publication/2025-10-22-embedded-DA
excerpt: 'This paper explores data-driven methods of state estimation using delay embedding.'
date: 2025-10-22
venue: 'In review'
citation: 'McGowan, S.P., Robertson, W.S.P., Maclean, J., Balasuriya, S. Model-free data assimilation in the embedded space. In review (2025).'
---

Estimating the state of a geophysical system when only incomplete and imprecise information is available is an important problem across meteorology and climate science. This is critical for initialising numerical models for forecasting, filtering measurement noise, estimating unobserved states, and interpolating between infrequent observations. In settings of chaotic dynamics, noisy observations, and imperfect model structure present significant challenges in accurate state estimation. Standard methods of data assimilation are guaranteed to find optimal estimates but often assume that the underlying model is perfect. Adaptations that replace the model dynamics with purely data-driven representations using delay embedding have shown promise in settings where accurate models are unavailable. This paper describes a general method of strengthening these existing methods by performing data assimilation directly in the delay embedding space that enhances the stability, accuracy, and data efficiency of the filtering algorithms. Data-driven extensions of the Extended, Ensemble, and Unscented Kalman filters are derived and compared in detail against the traditional model-based algorithms in a variety of settings. The presented methods offer improved results in settings of partial observation and high nonlinearity through reconstruction of the global state by coupling local data-driven representations of dynamics.