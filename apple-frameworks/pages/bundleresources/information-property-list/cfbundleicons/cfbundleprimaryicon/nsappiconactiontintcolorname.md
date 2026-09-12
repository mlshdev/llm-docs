> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname)

# NSAppIconActionTintColorName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · watchOS 10.0+

The tint color to apply to text and symbols in the App Shortcuts platter.

## Details

`NSAppIconActionTintColorName`

<a id="Discussion"></a>

## Discussion

By default, the system uses predefined colors for text and symbols in the App Shortcuts platter — a view that represents a single group of App Shortcuts. To override that behavior and change the color of those items, add a custom color to your app’s asset catalog and specify the color’s name as the value for this key.

```swift
<dict>
     <key>CFBundlePrimaryIcon</key>
     <dict>
         <key>NSAppIconActionTintColorName</key>
         <string>CustomTintColor</string>
    </dict>
</dict>
```

If your app provides multiple app icons, you can specify a different tint color to match each alternative.

```swift
<dict>
     <key>CFBundlePrimaryIcon</key>
     <dict>
         <key>NSAppIconActionTintColorName</key>
         <string>CustomTintColor</string>
    </dict>
    <key>CFBundleAlternateIcons</key>
     <dict>
         <key>MyAlternateIcon</key>
         <dict>
            <key>NSAppIconActionTintColorName</key>
            <string>AlternateCustomTintColor</string>
         </dict>
    </dict>
</dict>
```

## See Also

### Customizing the App Shortcuts platter

- [NSAppIconComplementingColorNames](nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.
