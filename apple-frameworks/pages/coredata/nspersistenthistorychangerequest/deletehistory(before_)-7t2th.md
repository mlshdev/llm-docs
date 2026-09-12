> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-7t2th](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-7t2th)

# deleteHistory(before:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than a given date.

## Declaration

```swift
class func deleteHistory(before date: Date) -> Self
```

## Parameters

- `date`: The date used to define the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end date boundary.

## See Also

### Purging History

- [deleteHistory(before:)](deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.
- [deleteHistory(before:)](deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.

# deleteHistoryBeforeDate: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than a given date.

## Declaration

```objectivec
+ (instancetype) deleteHistoryBeforeDate:(NSDate *) date;
```

## Parameters

- `date`: The date used to define the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end date boundary.

## See Also

### Purging History

- [deleteHistoryBeforeToken:](deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.
- [deleteHistoryBeforeTransaction:](deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.
