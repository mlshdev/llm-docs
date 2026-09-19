> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckrecordzonenotification/databasescope

# databaseScope (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The type of database for the record zone.

## Declaration

```swift
var databaseScope: CKDatabase.Scope { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is one of the constants that [CKDatabase.Scope](../ckdatabase/scope.md) defines.

# databaseScope (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The type of database for the record zone.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKDatabaseScope databaseScope;
```

<a id="discussion"></a>

## Discussion

This property’s value is one of the constants that [CKDatabaseScope](../ckdatabase/scope.md) defines.
