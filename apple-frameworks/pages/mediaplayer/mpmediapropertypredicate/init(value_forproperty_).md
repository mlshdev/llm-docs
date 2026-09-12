> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapropertypredicate/init(value:forproperty:)](https://developer.apple.com/documentation/mediaplayer/mpmediapropertypredicate/init(value:forproperty:))

# init(value:forProperty:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media property predicate with the default comparison type.

## Declaration

```swift
init(value: Any?, forProperty property: String)
```

## Parameters

- `value`: The property value that you want to match when you query the Music library. For example, if you specify the [MPMediaItemPropertyArtist](../mpmediaitempropertyartist.md) constant in the `forProperty` parameter, in this parameter you supply a string containing the artist name.
- `property`: A property to use to build a media property predicate. See Media item types and keys.

<a id="return-value"></a>

## Return Value

A media property predicate.

<a id="Discussion"></a>

## Discussion

This is a convenience method that uses the default logical comparison type of [MPMediaPredicateComparison.equalTo](../mpmediapredicatecomparison/equalto.md).

## See Also

### Creating media property predicates

- [init(value:forProperty:comparisonType:)](init%28value_forproperty_comparisontype_%29.md): Creates a media property predicate with a specified comparison type.

# predicateWithValue:forProperty: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media property predicate with the default comparison type.

## Declaration

```objectivec
+ (MPMediaPropertyPredicate *) predicateWithValue:(id) value forProperty:(NSString *) property;
```

## Parameters

- `value`: The property value that you want to match when you query the Music library. For example, if you specify the [MPMediaItemPropertyArtist](../mpmediaitempropertyartist.md) constant in the `forProperty` parameter, in this parameter you supply a string containing the artist name.
- `property`: A property to use to build a media property predicate. See Media item types and keys.

<a id="return-value"></a>

## Return Value

A media property predicate.

<a id="Discussion"></a>

## Discussion

This is a convenience method that uses the default logical comparison type of [MPMediaPredicateComparisonEqualTo](../mpmediapredicatecomparison/equalto.md).

## See Also

### Creating media property predicates

- [predicateWithValue:forProperty:comparisonType:](init%28value_forproperty_comparisontype_%29.md): Creates a media property predicate with a specified comparison type.
