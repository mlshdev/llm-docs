> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpmediapropertypredicate/init(value:forproperty:comparisontype:)

# init(value:forProperty:comparisonType:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media property predicate with a specified comparison type.

## Declaration

```swift
init(value: Any?, forProperty property: String, comparisonType: MPMediaPredicateComparison)
```

## Parameters

- `value`: The property value that you want to match when you query the Music library. For example, if you specify the `MPMediaItemPropertyArtist` constant in the `forProperty` parameter, in this parameter you supply a string containing the artist name.
- `property`: A property to use to build a media property predicate. See General Media Item Property Keys and Podcast Item Property Keys in [MPMediaItem](../mpmediaitem.md).
- `comparisonType`: : The logical comparison type for the predicate. See [MPMediaPredicateComparison](../mpmediapredicatecomparison.md).

<a id="return-value"></a>

## Return Value

A media property predicate.

## See Also

### Creating media property predicates

- [init(value:forProperty:)](init%28value_forproperty_%29.md): Creates a media property predicate with the default comparison type.

# predicateWithValue:forProperty:comparisonType: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media property predicate with a specified comparison type.

## Declaration

```objectivec
+ (MPMediaPropertyPredicate *) predicateWithValue:(id) value forProperty:(NSString *) property comparisonType:(MPMediaPredicateComparison) comparisonType;
```

## Parameters

- `value`: The property value that you want to match when you query the Music library. For example, if you specify the `MPMediaItemPropertyArtist` constant in the `forProperty` parameter, in this parameter you supply a string containing the artist name.
- `property`: A property to use to build a media property predicate. See General Media Item Property Keys and Podcast Item Property Keys in [MPMediaItem](../mpmediaitem.md).
- `comparisonType`: : The logical comparison type for the predicate. See [MPMediaPredicateComparison](../mpmediapredicatecomparison.md).

<a id="return-value"></a>

## Return Value

A media property predicate.

## See Also

### Creating media property predicates

- [predicateWithValue:forProperty:](init%28value_forproperty_%29.md): Creates a media property predicate with the default comparison type.
