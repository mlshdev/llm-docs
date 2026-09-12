> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/init()](https://developer.apple.com/documentation/foundation/nsuseractivity/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Creates a user activity object using the first activity type declared in the app’s information property list file.

> Use initWithActivityType: with a specific activity type string

## Declaration

```swift
convenience init()
```

<a id="return-value"></a>

## Return Value

An [NSUserActivity](../nsuseractivity.md) object.

<a id="Discussion"></a>

## Discussion

This method retrieves the first string of the [NSUserActivityTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW28) key declared in the app’s `Info.plist` file.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Creates a user activity object using the first activity type declared in the app’s information property list file.

> Use initWithActivityType: with a specific activity type string

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An [NSUserActivity](../nsuseractivity.md) object.

<a id="Discussion"></a>

## Discussion

This method retrieves the first string of the [NSUserActivityTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW28) key declared in the app’s `Info.plist` file.
