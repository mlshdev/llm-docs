> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/appstorereceipturl](https://developer.apple.com/documentation/foundation/bundle/appstorereceipturl)

# appStoreReceiptURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

The file URL for the bundle’s App Store receipt.

> Use AppTransaction.shared and Transaction.all from StoreKit.framework instead

## Declaration

```swift
var appStoreReceiptURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The receipt isn’t necessary if you use [AppTransaction](../../storekit/apptransaction.md) to validate the app download, or [Transaction](../../storekit/transaction.md) to validate in-app purchases. Only use the receipt if your app uses the [Original API for In-App Purchase](../../storekit/original-api-for-in-app-purchase.md), or needs the receipt to validate the app download because it can’t use [AppTransaction](../../storekit/apptransaction.md).

Use this app bundle property to locate the app receipt if it’s present; this property is `nil` if the receipt isn’t present. In the rare case a receipt is invalid or missing in an app that a user downloads from the App Store, use [SKReceiptRefreshRequest](../../storekit/skreceiptrefreshrequest.md) to request a new receipt. For information about validating receipts, see [Choosing a receipt validation technique](../../storekit/choosing-a-receipt-validation-technique.md).

You can’t use the general best practice of weak linking using the [responds(to:)](../../objectivec/nsobjectprotocol/responds%28to_%29.md) method here; the method’s implementation uses the [doesNotRecognizeSelector(\_:)](../../objectivec/nsobject-swift.class/doesnotrecognizeselector%28__%29.md) method.

<a id="Get-the-receipt-in-testing-environments"></a>

### Get the receipt in testing environments

Receipts aren’t initially present in iOS and iPadOS apps in the sandbox environment and in Xcode. Apps get a receipt after the tester completes the first in-app purchase. When your app checks [appStoreReceiptURL](appstorereceipturl.md) and finds that it’s `nil`, assume the tester is a new customer and has no access to premium content. For Mac apps running in TestFlight, the receipt is always present.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [url(forAuxiliaryExecutable:)](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [path(forAuxiliaryExecutable:)](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.

# appStoreReceiptURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file URL for the bundle’s App Store receipt.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * appStoreReceiptURL;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The receipt isn’t necessary if you use [AppTransaction](../../storekit/apptransaction.md) to validate the app download, or [Transaction](../../storekit/transaction.md) to validate in-app purchases. Only use the receipt if your app uses the [Original API for In-App Purchase](../../storekit/original-api-for-in-app-purchase.md), or needs the receipt to validate the app download because it can’t use [AppTransaction](../../storekit/apptransaction.md).

Use this app bundle property to locate the app receipt if it’s present; this property is `nil` if the receipt isn’t present. In the rare case a receipt is invalid or missing in an app that a user downloads from the App Store, use [SKReceiptRefreshRequest](../../storekit/skreceiptrefreshrequest.md) to request a new receipt. For information about validating receipts, see [Choosing a receipt validation technique](../../storekit/choosing-a-receipt-validation-technique.md).

You can’t use the general best practice of weak linking using the [respondsToSelector:](../../objectivec/nsobjectprotocol/responds%28to_%29.md) method here; the method’s implementation uses the [doesNotRecognizeSelector:](../../objectivec/nsobject-swift.class/doesnotrecognizeselector%28__%29.md) method.

<a id="Get-the-receipt-in-testing-environments"></a>

### Get the receipt in testing environments

Receipts aren’t initially present in iOS and iPadOS apps in the sandbox environment and in Xcode. Apps get a receipt after the tester completes the first in-app purchase. When your app checks [appStoreReceiptURL](appstorereceipturl.md) and finds that it’s `nil`, assume the tester is a new customer and has no access to premium content. For Mac apps running in TestFlight, the receipt is always present.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [URLForAuxiliaryExecutable:](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [pathForAuxiliaryExecutable:](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.
