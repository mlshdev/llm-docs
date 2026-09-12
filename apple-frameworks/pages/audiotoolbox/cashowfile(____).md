> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/cashowfile(_:_:)](https://developer.apple.com/documentation/audiotoolbox/cashowfile(_:_:))

# CAShowFile(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Prints the internal state of an object to a file.

## Declaration

```swift
func CAShowFile(_ inObject: UnsafeMutableRawPointer, _ inFile: UnsafeMutablePointer<FILE>)
```

## Parameters

- `inObject`: The Core Audio object whose internal state you want to print.
- `inFile`: The file you want to print object state information to

<a id="Discussion"></a>

## Discussion

## See Also

### Audio Toolbox Debugging Functions

- [CAShow(\_:)](cashow%28__%29.md): Prints the internal state of an object to `stdio`.

# CAShowFile (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Prints the internal state of an object to a file.

## Declaration

```objectivec
extern void CAShowFile(void *inObject, FILE *inFile);
```

## Parameters

- `inObject`: The Core Audio object whose internal state you want to print.
- `inFile`: The file you want to print object state information to

<a id="Discussion"></a>

## Discussion

## See Also

### Audio Toolbox Debugging Functions

- [CAShow](cashow%28__%29.md): Prints the internal state of an object to `stdio`.
