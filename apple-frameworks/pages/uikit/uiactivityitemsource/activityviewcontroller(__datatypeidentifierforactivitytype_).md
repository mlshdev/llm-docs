> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontroller(_:datatypeidentifierforactivitytype:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontroller(_:datatypeidentifierforactivitytype:))

# activityViewController(\_:dataTypeIdentifierForActivityType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For items that are provided as data, returns the UTI for the item.

## Declaration

```swift
optional func activityViewController(_ activityViewController: UIActivityViewController, dataTypeIdentifierForActivityType activityType: UIActivity.ActivityType?) -> String
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type; may be `nil`.

<a id="return-value"></a>

## Return Value

The UTI for the item.

<a id="Discussion"></a>

## Discussion

Providing the UTI allows services to handle specific data types in appropriate ways, such as an email service formatting an image to display in-line. If you provide items as [NSData](../../foundation/nsdata.md) objects, implement this method to allow those services to better handle your data.

To ensure that Mail can handle an attachment that uses your exported UTI, include the [UTExportedTypeDeclarations](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/UTExportedTypeDeclarations) key in your app’s `Info.plist` file, describing the UTI and providing the MIME type for it. The following example shows how `public.jpeg` might be defined as an exported type (only the required keys are shown):

```objc
<key>UTExportedTypeDeclarations</key>
        <array>
            <dict>
                <key>UTTypeIdentifier</key>
                <string>public.jpeg</string>
                <key>UTTypeConformsTo</key>
                <array>
                    <string>public.image</string>
                    <string>public.data</string>
                </array>
                <key>UTTypeTagSpecification</key>
                <dict>
                    <key>com.apple.ostype</key>
                    <string>JPEG</string>
                    <key>public.filename-extension</key>
                    <array>
                        <string>jpeg</string>
                        <string>jpg</string>
                    </array>
                    <key>public.mime-type</key>
                    <string>image/jpeg</string>
                </dict>
            </dict>
        </array>
```

## See Also

### Providing information about the data items

- [activityViewController(\_:subjectForActivityType:)](activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController(\_:thumbnailImageForActivityType:suggestedSize:)](activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.

# activityViewController:dataTypeIdentifierForActivityType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For items that are provided as data, returns the UTI for the item.

## Declaration

```objectivec
- (NSString *) activityViewController:(UIActivityViewController *) activityViewController dataTypeIdentifierForActivityType:(UIActivityType) activityType;
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type; may be `nil`.

<a id="return-value"></a>

## Return Value

The UTI for the item.

<a id="Discussion"></a>

## Discussion

Providing the UTI allows services to handle specific data types in appropriate ways, such as an email service formatting an image to display in-line. If you provide items as [NSData](../../foundation/nsdata.md) objects, implement this method to allow those services to better handle your data.

To ensure that Mail can handle an attachment that uses your exported UTI, include the [UTExportedTypeDeclarations](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/UTExportedTypeDeclarations) key in your app’s `Info.plist` file, describing the UTI and providing the MIME type for it. The following example shows how `public.jpeg` might be defined as an exported type (only the required keys are shown):

```objc
<key>UTExportedTypeDeclarations</key>
        <array>
            <dict>
                <key>UTTypeIdentifier</key>
                <string>public.jpeg</string>
                <key>UTTypeConformsTo</key>
                <array>
                    <string>public.image</string>
                    <string>public.data</string>
                </array>
                <key>UTTypeTagSpecification</key>
                <dict>
                    <key>com.apple.ostype</key>
                    <string>JPEG</string>
                    <key>public.filename-extension</key>
                    <array>
                        <string>jpeg</string>
                        <string>jpg</string>
                    </array>
                    <key>public.mime-type</key>
                    <string>image/jpeg</string>
                </dict>
            </dict>
        </array>
```

## See Also

### Providing information about the data items

- [activityViewController:subjectForActivityType:](activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController:thumbnailImageForActivityType:suggestedSize:](activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.
