> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothunpackdata](https://developer.apple.com/documentation/iobluetooth/iobluetoothunpackdata)

# IOBluetoothUnpackData

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Unpacks a variable amount of data from a buffer into a variable number of parameters according to a printf-style format string.

## Declaration

```objectivec
extern long IOBluetoothUnpackData(ByteCount inBufferSize, const void *inBuffer, const char *inFormat, ...);
```

## Parameters

- `inBufferSize`: Size of buffer to unpack data from.
- `inBuffer`: Ptr to buffer to unpack data from.
- `inFormat`: Printf-Style format string controlling how the data is unpacked.

<a id="return-value"></a>

## Return Value

Number of bytes unpacked or -1 if an error occurred.

<a id="Discussion"></a>

## Discussion

Pass the parameters to receive data as the remaining arguments after the format string.

Supported format characters:

```objc
 
   	'b' Ptr to receive 1 byte of data ('b'yte).
   	'h' Ptr to receive 2 bytes of data ('h'alf-word).
   	'H' Ptr to receive 2 bytes of byte-reversed data ('h'alf-word).
   	't' Ptr to receive 3 bytes of data ('t'riple byte, least significant 24-bits).
   	'T' Ptr to receive 3 bytes of byte-reversed data ('t'riple byte, least significant 24-bits).
   	'w' Ptr to receive 4 bytes of data ('w'ord).
   	'W' Ptr to receive 4 bytes of byte-reversed data ('w'ord).
   	'1' Ptr to receive 1 byte of data.
   	'2' Ptr to receive 2 bytes of data.
   	'@'	(shift-2) Ptr to 2 bytes of data, byte reversed.
   	'3' Ptr to receive 3 bytes of data.
   	'#'	(shift-3) Ptr to receive 3 bytes of data, byte reversed.
   	'4' Ptr to receive 4 bytes of data.
   	'$'	(shift-4) Ptr to receive 4 bytes of data, byte reversed.
   	'5' Ptr to receive 5 bytes of data.
   	'%'	(shift-5) Ptr to receive 5 bytes of data, byte reversed.
   	'6' Ptr to receive 6 bytes of data.
   	'^'	(shift-6) Ptr to receive 6 bytes of data, byte reversed.
   	'7' Ptr to receive 7 bytes of data.
   	'&'	(shift-7) Ptr to receive 7 bytes of data, byte reversed.
   	'8' Ptr to receive 8 bytes of data.
   	'*'	(shift-8) Ptr to receive 8 bytes of data, byte reversed.
   	'9' Ptr to receive 9 bytes of data.
   	'('	(shift-9) Ptr to receive 9 bytes of data, byte reversed.
   	'n' Ptr to receive n bytes of data (first param is size, second is ptr to receive data).
   	'N' Ptr to receive n bytes of data to byte reverse (first param is size, second is ptr to receive data).
   	's' Ptr to receive C-string (first param is max size, second is ptr to receive data).
   	'p' Ptr to receive Pascal-string (first param is max size including length-byte, second is ptr to receive data).
 
```

Example usage:

```objc
 
   	bytesUnpacked = UnpackData( 100, buffer, "bwnsp", &myByte1, &myWord, 50, buffer1, 128, buffer2, 255, pString );
 
```

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothIsFileAppleDesignatedPIMData](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfAvailableHIDDevices](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)
- [IOBluetoothPackData](iobluetoothpackdata.md): Packs a variable amount of parameters into a buffer according to a printf-style format string.
