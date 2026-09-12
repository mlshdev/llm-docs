> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/index(forsubkeypath:)](https://developer.apple.com/documentation/intents/inparameter/index(forsubkeypath:))

# index(forSubKeyPath:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index into the array at the specified portion of the key path.

## Declaration

```swift
func index(forSubKeyPath subKeyPath: String) -> Int
```

## Parameters

- `subKeyPath`: The key path to a property containing an array or ordered set. For example, when retrieving a message from a set of search results, specify the string `messages`.

<a id="return-value"></a>

## Return Value

The index of the item in the array.

<a id="Discussion"></a>

## Discussion

For intents or responses that contain an array of values, use this method to determine which object in the array was specified. For example, if a parameter represented the first object in an array of messages returned by a search, specifying the string `messages` would return the value `0`.

## See Also

### Managing Indexed Values

- [setIndex(\_:forSubKeyPath:)](setindex%28__forsubkeypath_%29.md): Specifies which item of an array or ordered set to use for the parameter.

# indexForSubKeyPath: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index into the array at the specified portion of the key path.

## Declaration

```objectivec
- (NSUInteger) indexForSubKeyPath:(NSString *) subKeyPath;
```

## Parameters

- `subKeyPath`: The key path to a property containing an array or ordered set. For example, when retrieving a message from a set of search results, specify the string `messages`.

<a id="return-value"></a>

## Return Value

The index of the item in the array.

<a id="Discussion"></a>

## Discussion

For intents or responses that contain an array of values, use this method to determine which object in the array was specified. For example, if a parameter represented the first object in an array of messages returned by a search, specifying the string `messages` would return the value `0`.

## See Also

### Managing Indexed Values

- [setIndex:forSubKeyPath:](setindex%28__forsubkeypath_%29.md): Specifies which item of an array or ordered set to use for the parameter.
