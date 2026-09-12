> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/init(context:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/init(context:))

# init(context:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a managed object subclass and inserts it into the specified managed object context.

## Declaration

```swift
convenience init(context moc: NSManagedObjectContext)
```

<a id="return-value"></a>

## Return Value

An initialized instance of the appropriate subclass.

<a id="Discussion"></a>

## Discussion

This method is only legal to call on subclasses of `NSManagedObject` that represent a single entity in the model.

## See Also

### Creating a Managed Object

- [init(entity:insertInto:)](init%28entity_insertinto_%29.md): Initializes a managed object from an entity description and inserts it into the specified managed object context.

# initWithContext: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a managed object subclass and inserts it into the specified managed object context.

## Declaration

```objectivec
- (instancetype) initWithContext:(NSManagedObjectContext *) moc;
```

<a id="return-value"></a>

## Return Value

An initialized instance of the appropriate subclass.

<a id="Discussion"></a>

## Discussion

This method is only legal to call on subclasses of `NSManagedObject` that represent a single entity in the model.

## See Also

### Creating a Managed Object

- [initWithEntity:insertIntoManagedObjectContext:](init%28entity_insertinto_%29.md): Initializes a managed object from an entity description and inserts it into the specified managed object context.
