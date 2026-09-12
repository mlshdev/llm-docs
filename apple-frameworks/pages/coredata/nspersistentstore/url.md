> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/url](https://developer.apple.com/documentation/coredata/nspersistentstore/url)

# url (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The URL for the persistent store.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

To alter the location of a store, send the persistent store coordinator a [setURL(\_:for:)](../nspersistentstorecoordinator/seturl%28__for_%29.md) message.

## See Also

### Managing Store Attributes

- [identifier](identifier.md): The unique identifier for the persistent store.
- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.

# URL (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The URL for the persistent store.

## Declaration

```objectivec
@property (strong, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

To alter the location of a store, send the persistent store coordinator a [setURL:forPersistentStore:](../nspersistentstorecoordinator/seturl%28__for_%29.md) message.

## See Also

### Managing Store Attributes

- [identifier](identifier.md): The unique identifier for the persistent store.
- [readOnly](isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.
