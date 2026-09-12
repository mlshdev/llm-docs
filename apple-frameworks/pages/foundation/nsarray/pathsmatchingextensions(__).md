> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/pathsmatchingextensions(_:)](https://developer.apple.com/documentation/foundation/nsarray/pathsmatchingextensions(_:))

# pathsMatchingExtensions(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing all the pathname elements in the receiving array that have filename extensions from a given array.

## Declaration

```swift
func pathsMatchingExtensions(_ filterTypes: [String]) -> [String]
```

## Parameters

- `filterTypes`: An array of `NSString` objects containing filename extensions. The extensions should not include the dot (”.”) character.

<a id="return-value"></a>

## Return Value

An array containing all the pathname elements in the receiving array that have filename extensions from the `filterTypes` array.

# pathsMatchingExtensions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing all the pathname elements in the receiving array that have filename extensions from a given array.

## Declaration

```objectivec
- (NSArray<NSString *> *) pathsMatchingExtensions:(NSArray<NSString *> *) filterTypes;
```

## Parameters

- `filterTypes`: An array of `NSString` objects containing filename extensions. The extensions should not include the dot (”.”) character.

<a id="return-value"></a>

## Return Value

An array containing all the pathname elements in the receiving array that have filename extensions from the `filterTypes` array.
