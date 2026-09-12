> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/componentsjoined(by:)](https://developer.apple.com/documentation/foundation/nsarray/componentsjoined(by:))

# componentsJoined(by:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

## Declaration

```swift
func componentsJoined(by separator: String) -> String
```

## Parameters

- `separator`: The string to interpose between the elements of the array.

<a id="return-value"></a>

## Return Value

An `NSString` object that is the result of interposing `separator` between the elements of the array. If the array has no elements, returns an `NSString` object representing an empty string.

<a id="Discussion"></a>

## Discussion

For example, this code excerpt writes “`here be dragons`” to the console:

```objc
NSArray *pathArray = [NSArray arrayWithObjects:@"here", @"be", @"dragons", nil];
NSLog(@"%@",[pathArray componentsJoinedByString:@" "]);
```

<a id="Special-Considerations"></a>

### Special Considerations

Each element in the array must handle `description`.

## See Also

### Related Documentation

- [components(separatedBy:)](../nsstring/components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.

# componentsJoinedByString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

## Declaration

```objectivec
- (NSString *) componentsJoinedByString:(NSString *) separator;
```

## Parameters

- `separator`: The string to interpose between the elements of the array.

<a id="return-value"></a>

## Return Value

An `NSString` object that is the result of interposing `separator` between the elements of the array. If the array has no elements, returns an `NSString` object representing an empty string.

<a id="Discussion"></a>

## Discussion

For example, this code excerpt writes “`here be dragons`” to the console:

```objc
NSArray *pathArray = [NSArray arrayWithObjects:@"here", @"be", @"dragons", nil];
NSLog(@"%@",[pathArray componentsJoinedByString:@" "]);
```

<a id="Special-Considerations"></a>

### Special Considerations

Each element in the array must handle `description`.

## See Also

### Related Documentation

- [componentsSeparatedByString:](../nsstring/components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
