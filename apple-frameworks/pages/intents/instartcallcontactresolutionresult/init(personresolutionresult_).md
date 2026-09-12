> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcontactresolutionresult/init(personresolutionresult:)](https://developer.apple.com/documentation/intents/instartcallcontactresolutionresult/init(personresolutionresult:))

# init(personResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the succesful start of a call with the specified contact.

## Declaration

```swift
init(personResolutionResult: INPersonResolutionResult)
```

## Parameters

- `personResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INStartCallContactResolutionResult](../instartcallcontactresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to start a call with the specified capabilities.

## See Also

### Creating a Resolution Result Object

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
- [INStartCallContactUnsupportedReason](../instartcallcontactunsupportedreason.md): Constants indicating the reason the app can’t support starting a call with the contact.

# initWithPersonResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the succesful start of a call with the specified contact.

## Declaration

```objectivec
- (instancetype) initWithPersonResolutionResult:(INPersonResolutionResult *) personResolutionResult;
```

## Parameters

- `personResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INStartCallContactResolutionResult](../instartcallcontactresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to start a call with the specified capabilities.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
- [INStartCallContactUnsupportedReason](../instartcallcontactunsupportedreason.md): Constants indicating the reason the app can’t support starting a call with the contact.
