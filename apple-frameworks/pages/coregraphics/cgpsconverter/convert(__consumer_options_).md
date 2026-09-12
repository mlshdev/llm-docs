> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconverter/convert(_:consumer:options:)](https://developer.apple.com/documentation/coregraphics/cgpsconverter/convert(_:consumer:options:))

# convert(\_:consumer:options:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Uses a PostScript converter to convert PostScript data to PDF data.

## Declaration

```swift
func convert(_ provider: CGDataProvider, consumer: CGDataConsumer, options: CFDictionary?) -> Bool
```

## Parameters

- `provider`: A Quartz data provider that supplies PostScript data.
- `consumer`: A Quartz data provider that will receive the resulting PDF data.
- `options`: This parameter should be `NULL`; it is reserved for future expansion of the API.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the PostScript conversion completed successfully (`true` if it did).

<a id="Discussion"></a>

## Discussion

The conversion is thread safe, however it is not possible to have more than one conversion job in process within a given address space or process. If a given thread is running a conversion and another thread starts a new conversion, the second conversion will block until the first conversion is complete.

> **Important**

>  Although `CGPSConverterConvert` is thread safe (it uses locks to prevent more than one conversion at a time in the same process), it is not thread safe with respect to the Resource Manager. If your application uses the Resource Manager on a separate thread, you should either use locks to prevent `CGPSConverterConvert` from executing during your usage of the Resource Manager or you should perform your conversions using the Post Script converter in a separate process.
>
> In general, you can avoid this issue by using nib files instead of Resource Manager resources.

## See Also

### Instance Methods

- [abort()](abort%28%29.md): Tells a PostScript converter to abort a conversion at the next available opportunity.

# CGPSConverterConvert (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Uses a PostScript converter to convert PostScript data to PDF data.

## Declaration

```objectivec
extern bool CGPSConverterConvert(CGPSConverterRef converter, CGDataProviderRef provider, CGDataConsumerRef consumer, CFDictionaryRef options);
```

## Parameters

- `converter`: A PostScript converter.
- `provider`: A Quartz data provider that supplies PostScript data.
- `consumer`: A Quartz data provider that will receive the resulting PDF data.
- `options`: This parameter should be `NULL`; it is reserved for future expansion of the API.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the PostScript conversion completed successfully (`true` if it did).

<a id="Discussion"></a>

## Discussion

The conversion is thread safe, however it is not possible to have more than one conversion job in process within a given address space or process. If a given thread is running a conversion and another thread starts a new conversion, the second conversion will block until the first conversion is complete.

> **Important**

>  Although `CGPSConverterConvert` is thread safe (it uses locks to prevent more than one conversion at a time in the same process), it is not thread safe with respect to the Resource Manager. If your application uses the Resource Manager on a separate thread, you should either use locks to prevent `CGPSConverterConvert` from executing during your usage of the Resource Manager or you should perform your conversions using the Post Script converter in a separate process.
>
> In general, you can avoid this issue by using nib files instead of Resource Manager resources.

## See Also

### Miscellaneous Functions

- [CGPSConverterIsConverting](isconverting.md): Checks whether the converter is currently converting data.
- [CGPSConverterAbort](abort%28%29.md): Tells a PostScript converter to abort a conversion at the next available opportunity.
