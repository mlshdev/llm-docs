> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/systemimagenamed(_:)](https://developer.apple.com/documentation/intents/inimage/systemimagenamed(_:))

# systemImageNamed(\_:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns an image object that contains the specified system symbol image.

## Declaration

```swift
class func systemImageNamed(_ systemImageName: String) -> Self
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the [SF Symbols](https://developer.apple.com/sf-symbols) app to look up the names of system symbol images.

<a id="return-value"></a>

## Return Value

An object that contains the specified symbol image. If `systemImageName` is invalid, the system passes `nil` to the completion handler of [fetchUIImage(completion:)](fetchuiimage%28completion_%29.md).

# systemImageNamed: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns an image object that contains the specified system symbol image.

## Declaration

```objectivec
+ (instancetype) systemImageNamed:(NSString *) systemImageName;
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the [SF Symbols](https://developer.apple.com/sf-symbols) app to look up the names of system symbol images.

<a id="return-value"></a>

## Return Value

An object that contains the specified symbol image. If `systemImageName` is invalid, the system passes `nil` to the completion handler of [fetchUIImageWithCompletion:](fetchuiimage%28completion_%29.md).
