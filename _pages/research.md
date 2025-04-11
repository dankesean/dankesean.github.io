---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}


Most of my work relies on using guarantees about certain dynamical systems to be able to reconstruct their dynamics from partially observed data. Namely, Takens Embedding Theorem, allows certain attractors from dynamical systems to be reconstructed using what is known as a *delay embedding*. 


Reconstruction for prediction 
------

$$\mathbf{x}(t+T) = \mathbf{x}(t)+\int^{t+T}_{t} \mathbf{g}(\mathbf{x}(\tau)) \, \mathrm{d} t $$

Reconstruction for estimation 
------

$$\mathbf{x}^f_{k} = \mathcal{M}_{k}\bigl(\mathbf{x}^a_{k-1}\bigr) $$

$$\mathbf{x}^a = \mathbf{x}^f_k+\mathbf{K}_k\left(\mathbf{y}_k-\mathcal{H}_k\bigl(\bm{x}^f_k \bigr)\right) $$


Reconstruction for correction 
------

$$\mathbf{x}(t+T) \approx \mathbf{x}^\mathcal{M}(t+T)+\mathcal{D}^t(\mathbf{e}(t)) $$

