> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsstring/init(charactersnocopy:length:deallocator:)

# init(charactersNoCopy:length:deallocator:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
convenience init(charactersNoCopy chars: UnsafeMutablePointer<unichar>, length len: Int, deallocator: ((UnsafeMutablePointer<unichar>, Int) -> Void)? = nil)
```

# initWithCharactersNoCopy:length:deallocator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
- (instancetype) initWithCharactersNoCopy:(unichar *) chars length:(NSUInteger) len deallocator:(void (^)(unichar *, NSUInteger )) deallocator;
```
