> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-5kghb](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-5kghb)

# deleteHistory(before:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than that defined by a given token.

## Declaration

```swift
class func deleteHistory(before token: NSPersistentHistoryToken?) -> Self
```

## Parameters

- `token`: The bookmark that marks the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end token bookmark boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Purging History

- [deleteHistory(before:)](deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistory(before:)](deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.

# deleteHistoryBeforeToken: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than that defined by a given token.

## Declaration

```objectivec
+ (instancetype) deleteHistoryBeforeToken:(NSPersistentHistoryToken *) token;
```

## Parameters

- `token`: The bookmark that marks the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end token bookmark boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Purging History

- [deleteHistoryBeforeDate:](deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistoryBeforeTransaction:](deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.
