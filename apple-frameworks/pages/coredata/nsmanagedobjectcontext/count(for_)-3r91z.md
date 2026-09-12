> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/count(for:)-3r91z](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/count(for:)-3r91z)

# count(for:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 3.0+ · macOS 10.5+ · tvOS 3.0+ · visionOS · watchOS 1.0+

Returns a count of the objects the specified request fetches when it executes.

## Declaration

```swift
nonisolated func count<T>(for request: NSFetchRequest<T>) throws -> Int where T : NSFetchRequestResult
```

## See Also

### Registering and fetching objects

- [fetch(\_:)](fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [registeredObject(for:)](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [object(with:)](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObject(with:)](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [execute(\_:)](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects()](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.
