> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442505-uttypecopydeclaration](https://developer.apple.com/documentation/coreservices/1442505-uttypecopydeclaration)

# UTTypeCopyDeclaration(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns a uniform type’s declaration.

## Declaration

```swift
func UTTypeCopyDeclaration(_ inUTI: CFString) -> Unmanaged<CFDictionary>?
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A dictionary that contains the uniform type’s declaration, or `NULL` if no declaration for that type can be found.

<a id="discussion"></a>

## Discussion

A uniform type identifier is declared in a bundle’s information [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44) (`info.plist`). This function extracts and returns a dictionary that contains the complete declaration of the uniform type identifier. This is useful when your application needs to access properties that does not have a built-in accessor function. For more information on the dictionary format, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

# UTTypeCopyDeclaration (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns a uniform type’s declaration.

## Declaration

```objectivec
CFDictionaryRef UTTypeCopyDeclaration(CFStringRef inUTI);
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A dictionary that contains the uniform type’s declaration, or `NULL` if no declaration for that type can be found.

<a id="discussion"></a>

## Discussion

A uniform type identifier is declared in a bundle’s information [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44) (`info.plist`). This function extracts and returns a dictionary that contains the complete declaration of the uniform type identifier. This is useful when your application needs to access properties that does not have a built-in accessor function. For more information on the dictionary format, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).
