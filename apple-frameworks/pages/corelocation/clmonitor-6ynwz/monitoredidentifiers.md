> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clmonitor-6ynwz/monitoredidentifiers

# monitoredIdentifiers

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An array that contains all the identifiers for each condition that the monitor is monitoring.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * monitoredIdentifiers;
```

## See Also

### Accessing the location monitor’s identifiers

- [name](name.md): The name associated with the location monitor instance.
