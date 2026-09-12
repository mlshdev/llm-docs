> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferenceurldescriptor/init(title:url:)-8l9d9](https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor/init(title:url:)-8l9d9)

# init(title:url:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a URL descriptor with the given title and URL.

## Declaration

```swift
init(title: String?, url URL: URL)
```

## Parameters

- `title`: A user-visible name of a room where virtual conferences take place.
- `URL`: The URL that users open to join a virtual conference.

<a id="return-value"></a>

## Return Value

A URL descriptor with the specified title and URL.

# initWithTitle:URL: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a URL descriptor with the given title and URL.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title URL:(NSURL *) URL;
```

## Parameters

- `title`: A user-visible name of a room where virtual conferences take place.
- `URL`: The URL that users open to join a virtual conference.

<a id="return-value"></a>

## Return Value

A URL descriptor with the specified title and URL.
