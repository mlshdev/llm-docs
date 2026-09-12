> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/setindex(_:forsubkeypath:)](https://developer.apple.com/documentation/intents/inparameter/setindex(_:forsubkeypath:))

# setIndex(\_:forSubKeyPath:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies which item of an array or ordered set to use for the parameter.

## Declaration

```swift
func setIndex(_ index: Int, forSubKeyPath subKeyPath: String)
```

## Parameters

- `index`: The index of an object in the array or ordered set.
- `subKeyPath`: The path to the property containing an array or ordered set. For example, the key path for the messages property of an [INSearchForMessagesIntentResponse](../insearchformessagesintentresponse.md) object would be the string `messages`.

<a id="Discussion"></a>

## Discussion

When the key path for a parameter contains an array or ordered set, use this method to specify which object in that array or ordered set to use.

## See Also

### Managing Indexed Values

- [index(forSubKeyPath:)](index%28forsubkeypath_%29.md): The index into the array at the specified portion of the key path.

# setIndex:forSubKeyPath: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies which item of an array or ordered set to use for the parameter.

## Declaration

```objectivec
- (void) setIndex:(NSUInteger) index forSubKeyPath:(NSString *) subKeyPath;
```

## Parameters

- `index`: The index of an object in the array or ordered set.
- `subKeyPath`: The path to the property containing an array or ordered set. For example, the key path for the messages property of an [INSearchForMessagesIntentResponse](../insearchformessagesintentresponse.md) object would be the string `messages`.

<a id="Discussion"></a>

## Discussion

When the key path for a parameter contains an array or ordered set, use this method to specify which object in that array or ordered set to use.

## See Also

### Managing Indexed Values

- [indexForSubKeyPath:](index%28forsubkeypath_%29.md): The index into the array at the specified portion of the key path.
