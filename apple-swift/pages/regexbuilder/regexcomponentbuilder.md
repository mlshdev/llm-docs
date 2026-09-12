> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/regexcomponentbuilder](https://developer.apple.com/documentation/regexbuilder/regexcomponentbuilder)

# RegexComponentBuilder

**Framework:** RegexBuilder  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A custom parameter attribute that constructs regular expressions from closures.

## Declaration

```swift
@resultBuilder enum RegexComponentBuilder
```

<a id="overview"></a>

## Overview

You typically see `RegexComponentBuilder` as a parameter attribute for `Regex`\- or `RegexComponent`-producing closure parameters, allowing those closures to combine multiple regular expression components. Type initializers and string algorithm methods in the RegexBuilder framework include a builder closure parameter, so that you can use regular expression components together.

## Topics

### Type Methods

- [buildBlock()](regexcomponentbuilder/buildblock%28%29.md)
- [buildExpression(\_:)](regexcomponentbuilder/buildexpression%28__%29.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-1l3rg.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-4at76.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-4hn5e.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-59bdi.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-6pyeu.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-75sld.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-79ri4.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-8v501.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-9xvwl.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-c1mb.md)
- [buildLimitedAvailability(\_:)](regexcomponentbuilder/buildlimitedavailability%28__%29-d693.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-14sjx.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-1kun5.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-1l56o.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-1mvah.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-1qjvk.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2hd06.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2nr1l.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2p8bg.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2qewj.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2r4ca.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2rw87.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-2v43k.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-302jc.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-31uif.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-34auc.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3cwue.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3d4xq.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3fe4r.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3iyin.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3m9by.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3qdzk.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3r0w.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3rw1u.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3uzf8.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-3vbfl.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-439as.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-48ufn.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-49qyb.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4ej74.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4ev8q.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4htjq.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4qcho.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4tecz.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4vll5.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-4w1nu.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-560og.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-5613o.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-5l4bx.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6ayyo.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6j8dc.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6jekf.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6nfqh.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6qrtp.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6u75f.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6vgmh.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-6wei8.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-78luz.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-7oi4x.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-8nuq5.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-8o64q.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-8t85z.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-90brb.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-92aur.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-94cff.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-95d7s.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9d7nj.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9dfaj.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9fl4.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9lklo.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9ne33.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-9upqy.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-dzro.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-fss2.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-k1e8.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-krsh.md)
- [buildPartialBlock(accumulated:next:)](regexcomponentbuilder/buildpartialblock%28accumulated_next_%29-oglj.md)
- [buildPartialBlock(first:)](regexcomponentbuilder/buildpartialblock%28first_%29.md)

## See Also

### Builders

- [AlternationBuilder](alternationbuilder.md): A custom parameter attribute that constructs regular expression alternations from closures.
