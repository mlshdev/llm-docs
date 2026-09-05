> Commit-pinned source for FFmpeg master: [doc/multithreading.txt](https://github.com/FFmpeg/FFmpeg/blob/9997fd060680d427bcc0c0715d163346da7ebd6f/doc/multithreading.txt)

# FFmpeg multithreading methods

FFmpeg provides two methods for multithreading codecs.

Slice threading decodes multiple parts of a frame at the same time, using
AVCodecContext execute() and execute2().

Frame threading decodes multiple frames at the same time.
It accepts N future frames and delays decoded pictures by N-1 frames.
The later frames are decoded in separate threads while the user is
displaying the current one.

# Restrictions on clients

Slice threading -

- The client's draw\_horiz\_band() must be thread-safe according to the comment
  in avcodec.h.

Frame threading -

- Restrictions with slice threading also apply.
- Custom get\_buffer2() and get\_format() callbacks must be thread-safe.
- There is one frame of delay added for every thread beyond the first one.
  Clients must be able to handle this; the pkt\_dts and pkt\_pts fields in
  AVFrame will work as usual.

# Restrictions on codec implementations

Slice threading -
None except that there must be something worth executing in parallel.

Frame threading -

- Codecs can only accept entire pictures per packet.

- Codecs similar to ffv1, whose streams don't reset across frames,
  will not work because their bitstreams cannot be decoded in parallel.

- The contents of buffers must not be read before ff\_progress\_frame\_await()
  has been called on them. reget\_buffer() and buffer age optimizations no longer work.

- The contents of buffers must not be written to after ff\_progress\_frame\_report()
  has been called on them. This includes draw\_edges().

# Porting codecs to frame threading

Find all context variables that are needed by the next frame. Move all
code changing them, as well as code calling get\_buffer(), up to before
the decode process starts. Call ff\_thread\_finish\_setup() afterwards. If
some code can't be moved, have update\_thread\_context() run it in the next
thread.

Add AV\_CODEC\_CAP\_FRAME\_THREADS to the codec capabilities. There will be very little
speed gain at this point but it should work.

Use ff\_thread\_get\_buffer() (or ff\_progress\_frame\_get\_buffer()
in case you have inter-frame dependencies and use the ProgressFrame API)
to allocate frame buffers.

Call ff\_progress\_frame\_report() after some part of the current picture has decoded.
A good place to put this is where draw\_horiz\_band() is called - add this if it isn't
called anywhere, as it's useful too and the implementation is trivial when you're
doing this. Note that draw\_edges() needs to be called before reporting progress.

Before accessing a reference frame or its MVs, call ff\_progress\_frame\_await().
