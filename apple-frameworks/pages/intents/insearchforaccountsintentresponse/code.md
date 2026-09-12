> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponse/code](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INSearchForAccountsIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INSearchForAccountsIntentResponseCode](../insearchforaccountsintentresponsecode.md): Constants indicating the state of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INSearchForAccountsIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSearchForAccountsIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INSearchForAccountsIntentResponseCode](../insearchforaccountsintentresponsecode.md): Constants indicating the state of the response.
