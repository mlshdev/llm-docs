> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/migrationmanagerclass()](https://developer.apple.com/documentation/coredata/nspersistentstore/migrationmanagerclass())

# migrationManagerClass() (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the migration manager class for this store class.

## Declaration

```swift
class func migrationManagerClass() -> AnyClass
```

<a id="return-value"></a>

## Return Value

The `NSMigrationManager` class for this store class

<a id="Discussion"></a>

## Discussion

In a subclass of `NSPersistentStore`, you can override this to provide a custom migration manager subclass (for example, to take advantage of store-specific functionality to improve migration performance).

# migrationManagerClass (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the migration manager class for this store class.

## Declaration

```objectivec
+ (Class) migrationManagerClass;
```

<a id="return-value"></a>

## Return Value

The `NSMigrationManager` class for this store class

<a id="Discussion"></a>

## Discussion

In a subclass of `NSPersistentStore`, you can override this to provide a custom migration manager subclass (for example, to take advantage of store-specific functionality to improve migration performance).
