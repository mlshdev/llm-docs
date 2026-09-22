> Pinned source for Qdrant master: [qdrant-landing/content/documentation/ops-configuration/_index.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/ops-configuration/_index.md)
> Canonical documentation: https://qdrant.tech/documentation/ops-configuration/

# Configuration

These pages cover the settings and runtime options available for customizing and administering a Qdrant deployment.

## Configuration

[Configuration](https://qdrant.tech/documentation/ops-configuration/configuration/) describes how to customize Qdrant's behavior using config files and environment variables, covering storage paths, network interfaces, performance parameters, and feature flags.

## Resource Quotas

[Resource Quotas](https://qdrant.tech/documentation/ops-configuration/quotas/) explains how to cap node memory and disk usage across a cluster, what happens when a node reaches a limit, and how to find the node that is full.

## Administration

[Administration](https://qdrant.tech/documentation/ops-configuration/administration/) covers runtime administration tools that let you modify instance behavior without restarting, including recovery mode for resolving out-of-memory situations, low memory mode, and strict mode.

## Memory Tiers

[Memory Tiers](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) explains how the `memory` parameter (`cold`, `cached`, `pinned`) controls RAM residency for vectors, indexes, quantized data, and payloads.

## Usage Statistics

[Usage Statistics](https://qdrant.tech/documentation/ops-configuration/usage-statistics/) explains what anonymized telemetry the open-source Qdrant image collects, why it's collected, and how to opt out.

## Running with GPU

[Running with GPU](https://qdrant.tech/documentation/ops-configuration/running-with-gpu/) explains how to enable GPU-accelerated vector indexing using dedicated Docker images for NVIDIA and AMD hardware, available from Qdrant v1.13.0.
