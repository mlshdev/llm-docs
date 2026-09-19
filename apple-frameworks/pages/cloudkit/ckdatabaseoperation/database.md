> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckdatabaseoperation/database

# database (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The database that the operation uses.

## Declaration

```swift
var database: CKDatabase? { get set }
```

<a id="discussion"></a>

## Discussion

For operations that you execute in a custom queue, use this property to specify the target database. Setting the database also sets the corresponding container, which it inherits from [CKOperation](../ckoperation.md). If this property’s value is `nil`, the operation targets the user’s private database.

The default value is `nil`.

# database (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The database that the operation uses.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CKDatabase * database;
```

<a id="discussion"></a>

## Discussion

For operations that you execute in a custom queue, use this property to specify the target database. Setting the database also sets the corresponding container, which it inherits from [CKOperation](../ckoperation.md). If this property’s value is `nil`, the operation targets the user’s private database.

The default value is `nil`.
