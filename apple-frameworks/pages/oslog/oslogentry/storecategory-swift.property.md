> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentry/storecategory-swift.property](https://developer.apple.com/documentation/oslog/oslogentry/storecategory-swift.property)

# storeCategory (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current log entry’s storage tag.

## Declaration

```swift
var storeCategory: OSLogEntry.StoreCategory { get }
```

## See Also

### Accessing Store Categories

- [OSLogEntry.StoreCategory](storecategory-swift.enum.md): A classification of how the entry was to be stored and rotated at the point when it was created.

# storeCategory (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current log entry’s storage tag.

## Declaration

```objectivec
@property (nonatomic, readonly) OSLogEntryStoreCategory storeCategory;
```

## See Also

### Accessing Store Categories

- [OSLogEntryStoreCategory](storecategory-swift.enum.md): A classification of how the entry was to be stored and rotated at the point when it was created.
