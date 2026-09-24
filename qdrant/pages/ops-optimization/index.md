> Pinned source for Qdrant master: [qdrant-landing/content/documentation/ops-optimization/_index.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/ops-optimization/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/ops-optimization/

# Optimization

These pages cover strategies and internal mechanisms for improving search performance, reducing memory usage, managing how Qdrant organizes data on disk, and troubleshooting read-write contention.

## Optimize Performance

[Optimize Performance](https://qdrant.tech/documentation/ops-optimization/optimize/) walks through three main optimization scenarios — high-speed search, high-precision search, and low memory usage — and the configuration choices that achieve each one.

## Optimizer

[Optimizer](https://qdrant.tech/documentation/ops-optimization/optimizer/) explains how Qdrant's background optimizer rebuilds segments to keep data structures efficient, including the vacuum, merge, and indexing stages and the thresholds that trigger them.

## Troubleshoot Read-Write Contention

[Troubleshoot Read-Write Contention](https://qdrant.tech/documentation/ops-optimization/read-write-contention/) walks through a step-by-step set of configuration changes to reduce contention between the background optimizer and search queries under continuous write load.
