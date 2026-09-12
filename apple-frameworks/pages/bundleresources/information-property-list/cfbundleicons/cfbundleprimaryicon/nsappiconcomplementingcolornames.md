> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames)

# NSAppIconComplementingColorNames

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · watchOS 10.0+

The names of the colors to use for the background of the App Shortcuts platter.

## Details

`NSAppIconComplementingColorNames`

<a id="Discussion"></a>

## Discussion

By default, the system chooses an appropriate background color for the App Shortcuts platter — a view that represents a single group of App Shortcuts. You can override that behavior in one of two ways:

1. Specify the name of a single custom color in your app’s asset catalog to show a solid background.
2. Specify the names of two custom colors to show a gradient background.

> **Important**

>  Use `array` for the value’s type, even when specifying a single custom color for a solid background.

```swift
<dict>
     <key>CFBundlePrimaryIcon</key>
     <dict>
         <key>NSAppIconActionTintColorName</key>
         <string>CustomTintColor</string>
         <key>NSAppIconComplementingColorNames</key>
         <array>
             <string>BackgroundGradientColor1</string>
             <string>BackgroundGradientColor2</string>
         </array>
    </dict>
</dict>
```

If your app provides multiple app icons, you can specify different background colors to match each alternative.

```swift
<dict>
     <key>CFBundlePrimaryIcon</key>
     <dict>
         <key>NSAppIconActionTintColorName</key>
         <string>CustomTintColor</string>
         <key>NSAppIconComplementingColorNames</key>
         <array>
             <string>BackgroundGradientColor1</string>
             <string>BackgroundGradientColor2</string>
         </array>
    </dict>
    <key>CFBundleAlternateIcons</key>
     <dict>
         <key>MyAlternateIcon</key>
         <dict>
            <key>NSAppIconActionTintColorName</key>
            <string>AlternateCustomTintColor</string>
            <key>NSAppIconComplementingColorNames</key>
            <array>
                <string>AlternateBackgroundGradientColor1</string>
                <string>AlternateBackgroundGradientColor2</string>
            </array>
         </dict>
    </dict>
</dict>
```

## See Also

### Customizing the App Shortcuts platter

- [NSAppIconActionTintColorName](nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
