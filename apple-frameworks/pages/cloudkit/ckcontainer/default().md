> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/default()](https://developer.apple.com/documentation/cloudkit/ckcontainer/default())

# default() (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns the app’s default container.

## Declaration

```swift
class func `default`() -> CKContainer
```

## Mentioned In

- [Designing and Creating a CloudKit Database](../designing-and-creating-a-cloudkit-database.md)

<a id="discussion"></a>

## Discussion

Use this method to retrieve your app’s default container. This is the one you typically use to store your app’s data. If you want the container for a different app, create a container using the [init(identifier:)](init%28identifier_%29.md) method.

During development, the container uses the development environment. When you release your app, the container uses the production environment.

## See Also

### Creating Containers

- [init(identifier:)](init%28identifier_%29.md): Creates a container for the specified identifier.

# defaultContainer (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns the app’s default container.

## Declaration

```objectivec
+ (CKContainer *) defaultContainer;
```

## Mentioned In

- [Designing and Creating a CloudKit Database](../designing-and-creating-a-cloudkit-database.md)

<a id="discussion"></a>

## Discussion

Use this method to retrieve your app’s default container. This is the one you typically use to store your app’s data. If you want the container for a different app, create a container using the [containerWithIdentifier:](init%28identifier_%29.md) method.

During development, the container uses the development environment. When you release your app, the container uses the production environment.

## See Also

### Creating Containers

- [containerWithIdentifier:](init%28identifier_%29.md): Creates a container for the specified identifier.
