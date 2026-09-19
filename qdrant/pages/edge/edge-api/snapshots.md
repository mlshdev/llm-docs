> Pinned source for Qdrant master: [qdrant-landing/content/documentation/edge/edge-api/snapshots.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/edge/edge-api/snapshots.md)
> Canonical documentation: https://qdrant.tech/documentation/edge/edge-api/snapshots/

# Snapshots

Snapshots move data between an Edge Shard and a Qdrant server collection. This section covers the methods; for how to combine them, refer to [Data Synchronization Patterns](https://qdrant.tech/documentation/edge/edge-data-synchronization-patterns/).

## unpack\_snapshot

Unpacks a snapshot archive on disk so it can be loaded as a shard. A static method in Python and an associated function in Rust, so it needs no shard instance.

```python
@staticmethod
def unpack_snapshot(snapshot_path: str, target_path: str) -> None
```

```rust
pub fn unpack_snapshot(snapshot_path: &Path, target_path: &Path) -> OperationResult<()>
```

| Parameter       | Description                           |
| --------------- | ------------------------------------- |
| `snapshot_path` | Path to the downloaded snapshot file. |
| `target_path`   | Directory to unpack into.             |

After unpacking, open the directory with `load`. The resulting shard keeps the configuration and file layout of the collection the snapshot came from, including its vector and payload indexes.

## snapshot\_manifest

Returns the shard's snapshot manifest, which describes its segments and their metadata. Pass it to a server when requesting a partial snapshot so the server sends only the segments that have changed.

```python
def snapshot_manifest(self) -> Any
```

```rust
pub fn snapshot_manifest(&self) -> OperationResult<SnapshotManifest>
```

**Returns** a JSON-like value in Python, and a `SnapshotManifest` in Rust.

## Apply a Snapshot

Applies a snapshot to a shard that already holds data. The two languages differ in shape here.

```python
def update_from_snapshot(
    self,
    snapshot_path: str,
    tmp_dir: Optional[str] = None,
) -> None
```

```rust
pub fn recover_partial_snapshot(
    shard_path: &Path,
    current_manifest: &SnapshotManifest,
    snapshot_path: &Path,
    snapshot_manifest: &SnapshotManifest,
) -> OperationResult<EdgeShard>
```

Python applies the snapshot to the open shard in place, optionally extracting through `tmp_dir`. Rust takes the shard's path and both manifests, and returns a new `EdgeShard` for the merged result, so the existing instance must be dropped first.

| Parameter           | Description                                    |
| ------------------- | ---------------------------------------------- |
| `snapshot_path`     | Path to the snapshot to apply.                 |
| `tmp_dir`           | Directory to extract through. Python only.     |
| `shard_path`        | Path to the shard being updated. Rust only.    |
| `current_manifest`  | Manifest of the shard as it stands. Rust only. |
| `snapshot_manifest` | Manifest of the incoming snapshot. Rust only.  |

> **Note**
>
> Applying a snapshot rewrites files in the shard directory. Pause or buffer writes for the duration, and make sure any queued updates have already reached the server, so local changes are not lost. Refer to <a href="https://qdrant.tech/documentation/edge/edge-synchronization-guide/">Synchronize with a Server</a>.
