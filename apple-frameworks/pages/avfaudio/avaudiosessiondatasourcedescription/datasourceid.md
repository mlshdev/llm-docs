> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/datasourceid

# dataSourceID (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The system-assigned identifier for the data source.

## Declaration

```swift
var dataSourceID: NSNumber { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property to assign a specific data source to some input or output within an audio session.

## See Also

### Identifying a Data Source

- [dataSourceName](datasourcename.md): A human-readable name for the data source.

# dataSourceID (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The system-assigned identifier for the data source.

## Declaration

```objectivec
@property (readonly) NSNumber * dataSourceID;
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property to assign a specific data source to some input or output within an audio session.

## See Also

### Identifying a Data Source

- [dataSourceName](datasourcename.md): A human-readable name for the data source.
