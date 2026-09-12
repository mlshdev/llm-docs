> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsenumerationoptions/concurrent](https://developer.apple.com/documentation/foundation/nsenumerationoptions/concurrent)

# concurrent (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the Block enumeration should be concurrent.

## Declaration

```swift
static var concurrent: NSEnumerationOptions { get }
```

<a id="Discussion"></a>

## Discussion

The order of invocation is nondeterministic and undefined; this flag is a hint and may be ignored by the implementation under some circumstances; the code of the Block must be safe against concurrent invocation.

## See Also

### Constants

- [reverse](reverse.md): Specifies that the enumeration should be performed in reverse.

# NSEnumerationConcurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the Block enumeration should be concurrent.

## Declaration

```objectivec
NSEnumerationConcurrent
```

<a id="Discussion"></a>

## Discussion

The order of invocation is nondeterministic and undefined; this flag is a hint and may be ignored by the implementation under some circumstances; the code of the Block must be safe against concurrent invocation.

## See Also

### Constants

- [NSEnumerationReverse](reverse.md): Specifies that the enumeration should be performed in reverse.
