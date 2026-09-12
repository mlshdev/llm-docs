> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd2](https://developer.apple.com/documentation/swift/simd2)

# SIMD2

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector of two scalar values.

## Declaration

```swift
@frozen struct SIMD2<Scalar> where Scalar : SIMDScalar
```

## Topics

### Operators

- [&\*(\_:\_:)](simd2/&_%28____%29-112uo.md): Conforms when `Scalar` is `Int8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-1qrul.md): Conforms when `Scalar` is `UInt8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-225dc.md): Conforms when `Scalar` is `UInt`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-5i6vf.md): Conforms when `Scalar` is `Int64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-5w85n.md): Conforms when `Scalar` is `Int32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-6a6qx.md): Conforms when `Scalar` is `Int16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-839sj.md): Conforms when `Scalar` is `Int`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-9wh6l.md): Conforms when `Scalar` is `UInt64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-9xv6g.md): Conforms when `Scalar` is `UInt32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd2/&_%28____%29-zf7x.md): Conforms when `Scalar` is `UInt16`. The pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-175iu.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-3f178.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-3x42n.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-583y4.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-5t97l.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-6mdz6.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-6pxed.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-6u4hj.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-7urty.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd2/&_=%28____%29-914py.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-13p1k.md): Conforms when `Scalar` is `UInt8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-17q4o.md): Conforms when `Scalar` is `UInt32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-2x2uo.md): Conforms when `Scalar` is `UInt`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-3ds74.md): Conforms when `Scalar` is `Int32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-46asb.md): Conforms when `Scalar` is `Int64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-4twsj.md): Conforms when `Scalar` is `Int16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-524ln.md): Conforms when `Scalar` is `Int`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-587j7.md): Conforms when `Scalar` is `UInt64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-5vpud.md): Conforms when `Scalar` is `UInt16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd2/&+%28____%29-9b5qm.md): Conforms when `Scalar` is `Int8`. The wrapping sum of two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-137dd.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-23bkb.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-2oe5d.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-4jhcv.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-69y8n.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-7l0iw.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-80h2s.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-8ie73.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-8itk8.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd2/&+=%28____%29-fols.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping sum of the two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-1acyh.md): Conforms when `Scalar` is `UInt64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-24vga.md): Conforms when `Scalar` is `Int16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-2wrvt.md): Conforms when `Scalar` is `UInt8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-4uwox.md): Conforms when `Scalar` is `Int8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-61yf0.md): Conforms when `Scalar` is `UInt`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-6ig99.md): Conforms when `Scalar` is `Int64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-83i5w.md): Conforms when `Scalar` is `Int32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-85d28.md): Conforms when `Scalar` is `UInt16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-9ewg4.md): Conforms when `Scalar` is `UInt32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd2/&-%28____%29-9gdup.md): Conforms when `Scalar` is `Int`. The wrapping difference of two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-3u4cj.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-4k2tw.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-4z8fi.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-5gaju.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-5yrvu.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-6u17c.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-8qqcv.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-8vm21.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-9llf9.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd2/&-=%28____%29-9orjp.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping difference of the two vectors.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-17nee.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-1uw8e.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-2jhzy.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-2vvd0.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-2yosk.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-2zi10.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-305pp.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-46jcg.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-4a7jo.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-4hwla.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-5ryuj.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-6a918.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-6gtlh.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-6yqcw.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-722ng.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-7l3t6.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-7vt6k.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-8rz76.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd2/'.!=%28____%29-9gqer.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-19afs.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-20u3y.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-23xmt.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-2eqbj.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-2exdh.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-30off.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-3t0r5.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-42msm.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-43d8e.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-4qhzq.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-50wxa.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-5vnc9.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-6g08g.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-716q1.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-7888u.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-8648n.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-8gw6q.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd2/'.==%28____%29-8t4ar.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd2/'.==%28____%29-99m9l.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.\>(\_:\_:)](simd2/'._%28____%29-18t82.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-1arp4.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd2/'._%28____%29-1ey3i.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd2/'._%28____%29-1gys3.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-1tln6.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd2/'._%28____%29-21zn2.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-22f6n.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-24wy.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd2/'._%28____%29-2awgf.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd2/'._%28____%29-2of10.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-2v79w.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd2/'._%28____%29-32obu.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd2/'._%28____%29-3457j.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-35uhn.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd2/'._%28____%29-3b00e.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd2/'._%28____%29-3cn6j.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd2/'._%28____%29-3g03p.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-4hdx6.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-4joai.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-4vo9l.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-53qss.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-5j9pg.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd2/'._%28____%29-607m1.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd2/'._%28____%29-68fpy.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd2/'._%28____%29-6mv4k.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-6otkm.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-7tdu2.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-7tlry.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd2/'._%28____%29-8585v.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-8a4gt.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd2/'._%28____%29-8q1ge.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-8zk2p.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-91t17.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-931vd.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd2/'._%28____%29-9ie0c.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd2/'._%28____%29-9kp8o.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd2/'._%28____%29-9xjgt.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd2/'._%28____%29-llyh.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-12uxa.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-1cmjk.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-1ic7a.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-1lx1o.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-1prbk.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-1qr9u.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-1tp4t.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-27trm.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-2fw5r.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-2rqh.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-3buq3.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-3lt4c.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-3xeko.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-4e9xn.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-4osl2.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-4x86y.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-518bk.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-5egjo.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-5lzb9.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-5t8zo.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-5whlw.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-6dkek.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-6pd7b.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-6wspu.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-74z2c.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-7a4ca.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-7dkll.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-8bzup.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-8e8dp.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-8gkbc.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-9adqi.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-9apel.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-9h2yk.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-9nbpc.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-9rqxy.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-fkwk.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd2/'._=%28____%29-rj2r.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd2/'._=%28____%29-wl4e.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.

### Initializers

- [init()](simd2/init%28%29.md): Creates a vector with zero in all lanes.
- [init(\_:)](simd2/init%28__%29-2xs3b.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of floating-point values.
- [init(\_:)](simd2/init%28__%29-6nms8.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of integers.
- [init(\_:\_:)](simd2/init%28____%29.md): Creates a new vector from the given elements.
- [init(\_:rounding:)](simd2/init%28__rounding_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.
- [init(clamping:)](simd2/init%28clamping_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, clamping the values of the given vector’s elements if necessary.
- [init(repeating:)](simd2/init%28repeating_%29-1d245.md): Conforms when `Scalar` is `UInt32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-1ilxx.md): Conforms when `Scalar` is `Float`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-2fd8o.md): Conforms when `Scalar` is `UInt64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-38iad.md): Conforms when `Scalar` is `Double`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-3b96i.md): Conforms when `Scalar` is `Int8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-4fybh.md): Conforms when `Scalar` is `Int`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-4s9km.md): Conforms when `Scalar` is `Int64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-5fin1.md): Conforms when `Scalar` is `Int32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-5ihci.md): Conforms when `Scalar` is `Int16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-6kydp.md): Conforms when `Scalar` is `UInt8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-714au.md): Conforms when `Scalar` is `UInt`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-8ie57.md): Conforms when `Scalar` is `UInt16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd2/init%28repeating_%29-8io2d.md): Conforms when `Scalar` is `Float16`. A vector with the specified scalar in all lanes.
- [init(truncatingIfNeeded:)](simd2/init%28truncatingifneeded_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, truncating the bit patterns of the given vector’s elements if necessary.
- [init(x:y:)](simd2/init%28x_y_%29.md): Creates a new vector from the given elements.

### Instance Properties

- [hashValue](simd2/hashvalue.md): The hash value.
- [scalarCount](simd2/scalarcount.md): The number of scalars in the vector.
- [x](simd2/x.md): The first element of the vector.
- [y](simd2/y.md): The second element of the vector.

### Subscripts

- [subscript(\_:)](simd2/subscript%28__%29.md): Accesses the scalar at the specified position.

### Type Aliases

- [SIMD2.ArrayLiteralElement](simd2/arrayliteralelement.md): The type of the elements of an array literal.
- [SIMD2.MaskStorage](simd2/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](simd2/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](simd2/equatable-implementations.md)
- [SIMD Implementations](simd2/simd-implementations.md)

## Relationships

### Conforms To

- [AnimatableData](https://developer.apple.com/documentation/realitykit/animatabledata)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [BitwiseCopyable](bitwisecopyable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [SIMD](simd.md)
- [SIMDStorage](simdstorage.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### SIMD Vectors

- [SIMD3](simd3.md): A vector of three scalar values.
- [SIMD4](simd4.md): A vector of four scalar values.
- [SIMD8](simd8.md): A vector of eight scalar values.
- [SIMD16](simd16.md): A vector of 16 scalar values.
- [SIMD32](simd32.md): A vector of 32 scalar values.
- [SIMD64](simd64.md): A vector of 64 scalar values.
