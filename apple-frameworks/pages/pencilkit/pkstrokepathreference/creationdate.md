> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/creationdate

# creationDate (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The time at which this stroke path starts.

## Declaration

```swift
var creationDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The time offset of the contained stroke points is relative to this date.

## See Also

### Getting the stroke path properties

- [count](count.md): The number of control points in this stroke path.

# creationDate (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The time at which this stroke path starts.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * creationDate;
```

<a id="Discussion"></a>

## Discussion

The time offset of the contained stroke points is relative to this date.

## See Also

### Getting the stroke path properties

- [count](count.md): The number of control points in this stroke path.
