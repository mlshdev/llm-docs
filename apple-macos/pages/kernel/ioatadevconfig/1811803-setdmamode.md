> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatadevconfig/1811803-setdmamode](https://developer.apple.com/documentation/kernel/ioatadevconfig/1811803-setdmamode)

# setDMAMode

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
void setDMAMode(
 UInt8inModeBitMap ); 
```

## Parameters

- `inModeBitMap`: bit-significant map of DMA mode

## See Also

### Miscellaneous

- [atadevconfig](1811729-atadevconfig.md): static creator function.
- [bitSigToNumeric](1811736-bitsigtonumeric.md): converts a bit-significant field to a numerical value. Note that a bit field of 0x00 has no defined result.
- [getDMACycleTime](1811744-getdmacycletime.md)
- [getDMAMode](1811750-getdmamode.md)
- [getPacketConfig](1811758-getpacketconfig.md)
- [getPIOCycleTime](1811768-getpiocycletime.md)
- [getPIOMode](1811774-getpiomode.md)
- [getUltraMode](1811781-getultramode.md)
- [initWithBestSelection](1811790-initwithbestselection.md): Handy initializer: pass the 512-byte result of the Identify Device or Identify Packet Device in endian-order for your platform (byte-swapped on PPC) and the IOATABusInfo object for the bus. The object will initialize all fields and select the best transfer modes that match on bus and device. If the return value was 0 (success or noErr), then a matching mode is supported. Examine the PIO and UDMA/DMA fields and to generate the apropriate SET FEATURES parameters for your drive and send this initialised object to the IOATAController when requesting a speed configuration. failure means no supported transfer modes matched between bus and device info.
- [setDMACycleTime](1811797-setdmacycletime.md)
- [setPacketConfig](1811808-setpacketconfig.md): For ATAPI devices, if the device asserts interrupt after the Packet Command when it is ready to accept the packet, set this value to true (mostly older devices). If the device accepts the packet only by asserting DRQ bit in status, then set this value false. Tells the bus controller whether to wait for packet acceptance or set pending interrupt.
- [setPIOCycleTime](1811814-setpiocycletime.md)
- [setPIOMode](1811821-setpiomode.md)
- [setUltraMode](1811827-setultramode.md)
