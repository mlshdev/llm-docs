> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatareadinglistitem/init(title:url:dateoflastvisit:)](https://developer.apple.com/documentation/browserkit/bebrowserdatareadinglistitem/init(title:url:dateoflastvisit:))

# init(title:url:dateOfLastVisit:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes a reading list item with the given content and access metadata.

## Declaration

```swift
init(title: String, url: URL, dateOfLastVisit: Date?)
```

## Parameters

- `title`: The title of the reading list item.
- `url`: The URL of the reading list item.
- `dateOfLastVisit`: The date when the item was last visited.

# initWithTitle:url:dateOfLastVisit: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes a reading list item with the given content and access metadata.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title url:(NSURL *) url dateOfLastVisit:(NSDate *) dateOfLastVisit;
```

## Parameters

- `title`: The title of the reading list item.
- `url`: The URL of the reading list item.
- `dateOfLastVisit`: The date when the item was last visited.
