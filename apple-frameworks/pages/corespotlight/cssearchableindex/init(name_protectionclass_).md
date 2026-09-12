> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/init(name:protectionclass:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/init(name:protectionclass:))

# init(name:protectionClass:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns an on-device index with the specified name and data protection class.

## Declaration

```swift
init(name: String, protectionClass: FileProtectionType?)
```

## Parameters

- `name`: A name that pertains to your custom organization.
- `protectionClass`: The file protection class. Acceptable values are [none](../../foundation/fileprotectiontype/none.md), [complete](../../foundation/fileprotectiontype/complete.md), [completeUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md), or [completeUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md).

<a id="return-value"></a>

## Return Value

An index that can handle items within the specified protection class.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

Use this method to specify a protection class for an index. You can specify a default protection class for index items in the entitlements for your app.

## See Also

### Creating an index

- [default()](default%28%29.md): Returns the default on-device index.
- [init(name:)](init%28name_%29.md): Returns an on-device index with the specified name.

# initWithName:protectionClass: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns an on-device index with the specified name and data protection class.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name protectionClass:(NSFileProtectionType) protectionClass;
```

## Parameters

- `name`: A name that pertains to your custom organization.
- `protectionClass`: The file protection class. Acceptable values are [NSFileProtectionNone](../../foundation/fileprotectiontype/none.md), [NSFileProtectionComplete](../../foundation/fileprotectiontype/complete.md), [NSFileProtectionCompleteUnlessOpen](../../foundation/fileprotectiontype/completeunlessopen.md), or [NSFileProtectionCompleteUntilFirstUserAuthentication](../../foundation/fileprotectiontype/completeuntilfirstuserauthentication.md).

<a id="return-value"></a>

## Return Value

An index that can handle items within the specified protection class.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

Use this method to specify a protection class for an index. You can specify a default protection class for index items in the entitlements for your app.

## See Also

### Creating an index

- [defaultSearchableIndex](default%28%29.md): Returns the default on-device index.
- [initWithName:](init%28name_%29.md): Returns an on-device index with the specified name.
