> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/init(identifier:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/init(identifier:))

# init(identifier:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a container for the specified identifier.

## Declaration

```swift
init(identifier containerIdentifier: String)
```

## Parameters

- `containerIdentifier`: The bundle identifier of the app with the container that you want to access. The bundle identifier must be in the app’s `com.apple.developer.icloud-container-identifiers` entitlement. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

The specified identifier must correspond to one of the containers in the iCloud capabilities section of your Xcode project. Including the identifier with your app’s capabilities adds the corresponding entitlements to your app. To access your app’s default container, use the [default()](default%28%29.md) method instead.

## See Also

### Creating Containers

- [default()](default%28%29.md): Returns the app’s default container.

# containerWithIdentifier: (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a container for the specified identifier.

## Declaration

```objectivec
+ (CKContainer *) containerWithIdentifier:(NSString *) containerIdentifier;
```

## Parameters

- `containerIdentifier`: The bundle identifier of the app with the container that you want to access. The bundle identifier must be in the app’s `com.apple.developer.icloud-container-identifiers` entitlement. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

The specified identifier must correspond to one of the containers in the iCloud capabilities section of your Xcode project. Including the identifier with your app’s capabilities adds the corresponding entitlements to your app. To access your app’s default container, use the [defaultContainer](default%28%29.md) method instead.

## See Also

### Creating Containers

- [defaultContainer](default%28%29.md): Returns the app’s default container.
