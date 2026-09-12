> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/isexclusive](https://developer.apple.com/documentation/coreaudio/catapdescription/isexclusive)

# isExclusive (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```swift
var isExclusive: Bool { get set }
```

<a id="discussion"></a>

## Discussion

True if this description should tap all processes except the process listed in the ‘processes’ property.

# exclusive (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, readwrite, getter=isExclusive) BOOL exclusive;
```

<a id="discussion"></a>

## Discussion

True if this description should tap all processes except the process listed in the ‘processes’ property.
