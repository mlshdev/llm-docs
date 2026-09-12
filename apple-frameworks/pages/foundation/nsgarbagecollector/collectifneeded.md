> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/collectifneeded](https://developer.apple.com/documentation/foundation/nsgarbagecollector/collectifneeded)

# collectIfNeeded

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Tells the receiver to collect if memory consumption thresholds have been exceeded.

## Declaration

```objectivec
- (void) collectIfNeeded;
```

<a id="Discussion"></a>

## Discussion

You use this method to indicate to the collector that there is an opportunity to perform a collection. Collection is subject to interruption on user input.

## See Also

### Triggering Collection

- [collectExhaustively](collectexhaustively.md): Deprecated. Tells the receiver to collect iteratively.
