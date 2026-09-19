> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/deviceuid

# deviceUID (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```swift
var deviceUID: String? { get set }
```

<a id="discussion"></a>

## Discussion

An optional deviceUID that will have a value if this tap only taps a specific hardware device

# deviceUID (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * deviceUID;
```

<a id="discussion"></a>

## Discussion

An optional deviceUID that will have a value if this tap only taps a specific hardware device
