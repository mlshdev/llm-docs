> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsgarbagecollector/collectexhaustively

# collectExhaustively

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Tells the receiver to collect iteratively.

## Declaration

```objectivec
- (void) collectExhaustively;
```

<a id="Discussion"></a>

## Discussion

You use this method to indicate to the collector that it should perform an exhaustive collection. Collection is subject to interruption on user input.

## See Also

### Triggering Collection

- [collectIfNeeded](collectifneeded.md): Deprecated. Tells the receiver to collect if memory consumption thresholds have been exceeded.
