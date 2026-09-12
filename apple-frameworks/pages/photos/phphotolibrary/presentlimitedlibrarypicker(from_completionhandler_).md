> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/presentlimitedlibrarypicker(from:completionhandler:)](https://developer.apple.com/documentation/photos/phphotolibrary/presentlimitedlibrarypicker(from:completionhandler:))

# presentLimitedLibraryPicker(from:completionHandler:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Prompts the user to update their limited library selection with a callback providing newly selected identifiers.

## Declaration

```swift
func presentLimitedLibraryPicker(from controller: UIViewController, completionHandler: @escaping @Sendable ([String]) -> Void)
```

```swift
func presentLimitedLibraryPicker(from controller: UIViewController) async -> [String]
```

## Parameters

- `controller`: The view controller from which to present the limited library picker.
- `completionHandler`: A closure the system invokes when the user finishes their selection. The closure provides only the newly selected asset identifiers.

<a id="Discussion"></a>

## Discussion

If the user enabled limited library access using [requestAuthorization(for:handler:)](requestauthorization%28for_handler_%29.md), use this method to present the limited library picker so they can update their selection. If the user hasn’t enabled limited library access mode for your app, calling this method does nothing. Use this method when disabling the automatic limited library alert prompt. By default, the system automatically prompts the user to update their limited library selection once per app life cycle. To suppress the prompt, add `PHPhotoLibraryPreventAutomaticLimitedAccessAlert` to your app’s `Info.plist` file.

Any changes the user applies to the limited library selection trigger a [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md) update.

## See Also

### Presenting the Limited Library Picker

- [presentLimitedLibraryPicker(from:)](presentlimitedlibrarypicker%28from_%29.md): Prompts the user to update their limited library selection.

# presentLimitedLibraryPickerFromViewController:completionHandler: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Prompts the user to update their limited library selection with a callback providing newly selected identifiers.

## Declaration

```objectivec
- (void) presentLimitedLibraryPickerFromViewController:(UIViewController *) controller completionHandler:(void (^)(NSArray<NSString *> *)) completionHandler;
```

## Parameters

- `controller`: The view controller from which to present the limited library picker.
- `completionHandler`: A closure the system invokes when the user finishes their selection. The closure provides only the newly selected asset identifiers.

<a id="Discussion"></a>

## Discussion

If the user enabled limited library access using [requestAuthorizationForAccessLevel:handler:](requestauthorization%28for_handler_%29.md), use this method to present the limited library picker so they can update their selection. If the user hasn’t enabled limited library access mode for your app, calling this method does nothing. Use this method when disabling the automatic limited library alert prompt. By default, the system automatically prompts the user to update their limited library selection once per app life cycle. To suppress the prompt, add `PHPhotoLibraryPreventAutomaticLimitedAccessAlert` to your app’s `Info.plist` file.

Any changes the user applies to the limited library selection trigger a [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md) update.

## See Also

### Presenting the Limited Library Picker

- [presentLimitedLibraryPickerFromViewController:](presentlimitedlibrarypicker%28from_%29.md): Prompts the user to update their limited library selection.
