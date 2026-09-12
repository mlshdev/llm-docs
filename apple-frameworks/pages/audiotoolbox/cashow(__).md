> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/cashow(_:)](https://developer.apple.com/documentation/audiotoolbox/cashow(_:))

# CAShow(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Prints the internal state of an object to `stdio`.

## Declaration

```swift
func CAShow(_ inObject: UnsafeMutableRawPointer)
```

## Parameters

- `inObject`: The Core Audio object whose internal state you want to print.

<a id="Discussion"></a>

## Discussion

## See Also

### Audio Toolbox Debugging Functions

- [CAShowFile(\_:\_:)](cashowfile%28____%29.md): Prints the internal state of an object to a file.

# CAShow (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Prints the internal state of an object to `stdio`.

## Declaration

```objectivec
extern void CAShow(void *inObject);
```

## Parameters

- `inObject`: The Core Audio object whose internal state you want to print.

<a id="Discussion"></a>

## Discussion

## See Also

### Audio Toolbox Debugging Functions

- [CAShowFile](cashowfile%28____%29.md): Prints the internal state of an object to a file.
