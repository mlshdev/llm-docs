> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor/append

# append (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Flag to append to an existing .mpsgraphpackage if found at provided url.

## Declaration

```swift
var append: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If false, the exisiting .mpsgraphpackage will be overwritten.

# append (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Flag to append to an existing .mpsgraphpackage if found at provided url.

## Declaration

```objectivec
@property (atomic, readwrite) BOOL append;
```

<a id="discussion"></a>

## Discussion

If false, the exisiting .mpsgraphpackage will be overwritten.
