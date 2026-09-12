> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchingfindsession/init(searchableobject:)-9zc4e](https://developer.apple.com/documentation/uikit/uitextsearchingfindsession/init(searchableobject:)-9zc4e)

# init(searchableObject:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes an object to manage the search for the searchable object you specify.

## Declaration

```swift
init(searchableObject: any __UITextSearching)
```

## Parameters

- `searchableObject`: An object that conforms to the [UITextSearching](../uitextsearching-53wjq.md) protocol that the session uses to search the text of your app and decorate the found results.

## See Also

### Creating a text searching find session

- [init(searchableObject:)](init%28searchableobject_%29-7swl5.md): Initializes an object to manage the search for the searchable object you specify.

# initWithSearchableObject: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes an object to manage the search for the searchable object you specify.

## Declaration

```objectivec
- (instancetype) initWithSearchableObject:(id<UITextSearching>) searchableObject;
```

## Parameters

- `searchableObject`: An object that conforms to the [UITextSearching](../uitextsearching-53wjq.md) protocol that the session uses to search the text of your app and decorate the found results.
