> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller/canaddpasses()](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller/canaddpasses())

# canAddPasses() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the device supports adding passes.

## Declaration

```swift
class func canAddPasses() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding passes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)
- [isPassLibraryAvailable()](../pkpasslibrary/ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [PKPassLibrary](../pkpasslibrary.md): Provides an interface to the user’s library of passes.

# canAddPasses (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the device supports adding passes.

## Declaration

```objectivec
+ (BOOL) canAddPasses;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding passes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)
- [isPassLibraryAvailable](../pkpasslibrary/ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [PKPassLibrary](../pkpasslibrary.md): Provides an interface to the user’s library of passes.
