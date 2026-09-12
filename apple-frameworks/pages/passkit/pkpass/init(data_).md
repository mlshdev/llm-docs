> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/init(data:)](https://developer.apple.com/documentation/passkit/pkpass/init(data:))

# init(data:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a pass using the data you provide.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: A signed pass.

<a id="Discussion"></a>

## Discussion

If there’s a problem encoding the data you supply, this method sets the `error` parameter based on the type of problem:

- The pass contains invalid data—this method throws the [PKPassKitError.Code.invalidDataError](../pkpasskiterror/code/invaliddataerror.md) error.
- The signature of the pass is invalid—this method throws the [PKPassKitError.Code.invalidSignature](../pkpasskiterror/code/invalidsignature.md) error.
- For other types of errors, `localizedDescription` contains a string suitable for presentation to the user.

Check the console for more detailed information.

# initWithData:error: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a pass using the data you provide.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: A signed pass.
- `error`: On error, populates with a description of the error.

<a id="Discussion"></a>

## Discussion

If there’s a problem encoding the data you supply, this method sets the `error` parameter based on the type of problem:

- The pass contains invalid data—this method throws the [PKInvalidDataError](../pkpasskiterror/code/invaliddataerror.md) error.
- The signature of the pass is invalid—this method throws the [PKInvalidSignature](../pkpasskiterror/code/invalidsignature.md) error.
- For other types of errors, `localizedDescription` contains a string suitable for presentation to the user.

Check the console for more detailed information.
