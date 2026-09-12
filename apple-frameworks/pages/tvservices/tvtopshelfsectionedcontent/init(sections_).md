> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfsectionedcontent/init(sections:)](https://developer.apple.com/documentation/tvservices/tvtopshelfsectionedcontent/init(sections:))

# init(sections:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates a sectioned content object and populates it with the specified sections.

## Declaration

```swift
init(sections: [TVTopShelfItemCollection<TVTopShelfSectionedItem>])
```

## Parameters

- `sections`: An array of [TVTopShelfItemCollection](../tvtopshelfitemcollection.md) objects, representing the sections of your interface.

<a id="return-value"></a>

## Return Value

A new sectioned content object containing the specified sections.

# initWithSections: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates a sectioned content object and populates it with the specified sections.

## Declaration

```objectivec
- (instancetype) initWithSections:(NSArray<TVTopShelfItemCollection<TVTopShelfSectionedItem *> *> *) sections;
```

## Parameters

- `sections`: An array of [TVTopShelfItemCollection](../tvtopshelfitemcollection.md) objects, representing the sections of your interface.

<a id="return-value"></a>

## Return Value

A new sectioned content object containing the specified sections.
