> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/capropertyanimation/init(keypath:)](https://developer.apple.com/documentation/quartzcore/capropertyanimation/init(keypath:))

# init(keyPath:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an `CAPropertyAnimation` instance for the specified key path.

## Declaration

```swift
convenience init(keyPath path: String?)
```

## Parameters

- `path`: The key path of the property to be animated.

<a id="return-value"></a>

## Return Value

A new instance of `CAPropertyAnimation` with the key path set to `keyPath`.

# animationWithKeyPath: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an `CAPropertyAnimation` instance for the specified key path.

## Declaration

```objectivec
+ (instancetype) animationWithKeyPath:(NSString *) path;
```

## Parameters

- `path`: The key path of the property to be animated.

<a id="return-value"></a>

## Return Value

A new instance of `CAPropertyAnimation` with the key path set to `keyPath`.
